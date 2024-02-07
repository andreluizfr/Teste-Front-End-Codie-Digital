import { AddPokemon, Divider, FeeAdvertise, FirstSection, FormContainer, FormTitle, FormWrapper, FourthSection, InputLabeled, LastSection, PokemonAddedCount, PokemonAddedWrapper, SchedulingInfos, SecondSection, SectionDescription, SectionTitle, SelectLabeled, ThirdSection } from "./styles";

import regions from '../../data/regions.json';
import pokemons from '../../data/pokemons.json';

import useSchedulingPriceCalculations from "../../hooks/useSchedulingPriceCalculations";
import { Scheduling, schedulingSchema } from "../../entities/Scheduling";
import { PageState } from "../../entities/PageState";
import { IHttpClient } from "../../infrastructure/httpClient/IHttpClient";

import { ValidationError } from "yup";
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useInjection } from "inversify-react";


interface props extends HTMLAttributes<HTMLElement> {
  setPageState: Dispatch<SetStateAction<PageState>>
}

export default function SchedulingForm({ setPageState }:props) {
  
  const regionsMap = regions as {[key:string]: string[]};
  const [selectedRegion, setSelectedRegion] = useState(Object.keys(regionsMap)[0]);
  function selectRegion(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedRegion(e.target.value);
  }

  const pokemonsList = pokemons.pokemons as string[];
  const [pokemonsAdded, updatePokemonsAdded] = useState<string[]>([""])
  function addPokemonToTeam() {
    if(pokemonsAdded.length < 6)  
      updatePokemonsAdded(prev=>[...prev, ""]);
  }
  function changePokemonFromList(e: React.ChangeEvent<HTMLSelectElement>, index: number) {
    updatePokemonsAdded(prev=>{
      const updated = [...prev];
      updated[index] = e.target.value;
      return updated;
    });
  }


  const httpClient: IHttpClient<string[]> = useInjection("HttpClient");
  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);

  useEffect(()=>{
    httpClient.get("/scheduling/date")
    .then((responseData:string[])=>setDates(responseData))
    .catch(error=>toast.error(error.message, {
      progress: undefined,
    }));
  }, []);

  useEffect(()=>{
    httpClient.post("/scheduling/time", {date: ""})
    .then((responseData:string[])=>setTimes(responseData))
    .catch(error=>toast.error(error.message, {
      progress: undefined,
    }));
  }, []);
  
  const { validPokemonsAdded, numberOfValidPokemonsAdded, subtotal, managingFee, total } = useSchedulingPriceCalculations(pokemonsAdded);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Scheduling>();

  let buttonClicked = false;

  function completeSchedulingData(data: Scheduling) {
    if(buttonClicked) {
      const completedData = {
        ...data,
        region: selectedRegion,
        pokemons: validPokemonsAdded,
      }
  
      schedulingSchema.validate(completedData)
      .then(validatedData=>{
        console.log(validatedData);
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        switch(randomNumber){
          case 1: setPageState("success");
          case 2: setPageState("fail");
        }
      })
      .catch((error: ValidationError)=>{
        toast.error(error.message, {
          progress: undefined,
        });
      });

      buttonClicked = false;
    }
  }

  return (  
    <FormWrapper>

      <FormTitle>
        Preencha o formulário para agendar sua consulta
      </FormTitle>

      <FormContainer onSubmit={handleSubmit((data)=>completeSchedulingData(data))}>

        <FirstSection>
          <InputLabeled placeholder="Digite seu nome">
            <label>Nome</label>
            <input placeholder="Digite seu nome" {...register('name')}/>
          </InputLabeled>

          <InputLabeled placeholder="Digite seu sobrenome">
            <label>Sobrenome</label>
            <input placeholder="Digite seu sobrenome" {...register('lastName')}/>
          </InputLabeled>

          <SelectLabeled>
            <label>Região</label>
            <select defaultValue={Object.keys(regionsMap)[0]} onChange={selectRegion}>
              {Object.keys(regionsMap).map(region=>{
                return <option value={region} key={region}>{region}</option>
              })}
            </select>
          </SelectLabeled>

          <SelectLabeled>
            <label>Cidade</label>
            <select defaultValue={""} {...register('city')}>
              <option value={""}>Selecione sua cidade</option>
              {regionsMap[selectedRegion].map(city=>
                <option value={city} key={city}>{city}</option>
              )}
            </select>
          </SelectLabeled>
        </FirstSection>

        <SecondSection>

          <SectionTitle>
            Cadastre seu time
          </SectionTitle>

          <SectionDescription>
            Atendemos até 06 pokémons por vez
          </SectionDescription>

          {pokemonsAdded.map((pokemonAdded, index)=>{
            return (
              <PokemonAddedWrapper key={"pokemonWrapper"+index}>
                <PokemonAddedCount>
                  Pokémon {"0"+(index+1)}
                </PokemonAddedCount>

                <select defaultValue={pokemonAdded} onChange={(e)=>changePokemonFromList(e, index)}>
                  <option value="">Selecione seu pokémon</option>
                  {pokemonsList.map(pokemonFromList=>
                    <option value={pokemonFromList} key={pokemonFromList}>{pokemonFromList}</option>
                  )}
                </select>
              </PokemonAddedWrapper>
            )
          })}

          <AddPokemon onClick={addPokemonToTeam} disabled={pokemonsAdded.length===6}>
            Adicionar novo pokémon ao time...
          </AddPokemon>

        </SecondSection>

        <ThirdSection>
          <SelectLabeled>
            <label>Data para atendimento</label>
            <select defaultValue={"Selecione uma data"} {...register('treatmentDate')}>
              {dates.map(date=>
                <option value={date}>{date}</option>
              )}
            </select>
          </SelectLabeled>

          <SelectLabeled>
            <label>Horário de atendimento</label>
            <select defaultValue={"Selecione um horário"} {...register('treatmentHour')}>
              {times.map(time=>
                <option value={time}>{time}</option>
              )}
            </select>
          </SelectLabeled>
        </ThirdSection>

        <Divider/>

        <FourthSection>

          <SchedulingInfos>
            <span>Número de pokémons a serem atendidos:</span>
            <span>{"0"+numberOfValidPokemonsAdded}</span>
          </SchedulingInfos>
            
          <SchedulingInfos>
            <span>Atendimento unitário por pokémon:</span>
            <span>R$ 70,00</span>
          </SchedulingInfos>

          <SchedulingInfos>
            <span>Subtotal:</span>
            <span>R$ {subtotal}</span>
          </SchedulingInfos>

          <SchedulingInfos>
            <span>Taxa geracional*:</span>
            <span>R$ {managingFee}</span>
          </SchedulingInfos>

          <FeeAdvertise>
            *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%
          </FeeAdvertise>
          
        </FourthSection>

        <LastSection>
          <span>Valor Total: R$ {total}</span>
          <button type="submit" onClick={()=>buttonClicked=true}>Concluir agendamento</button>
        </LastSection>

      </FormContainer>
      
    </FormWrapper>
  )
}