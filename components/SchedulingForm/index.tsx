import { AddPokemon, Divider, FeeAdvertise, FirstSection, FormContainer, FormTitle, FormWrapper, FourthSection, InputLabeled, LastSection, PokemonAddedCount, PokemonAddedWrapper, SchedulingInfos, SecondSection, SectionDescription, SectionTitle, SelectLabeled, ThirdSection } from "./styles";

import regions from '../../data/regions.json';
import pokemons from '../../data/pokemons.json';

import { useState } from "react";
import { useForm } from 'react-hook-form';
import useSchedulingPriceCalculations from "../../hooks/useSchedulingPriceCalculations";
import { Scheduling } from "../../entities/Scheduling";

export default function SchedulingForm() {
  
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

  const { validPokemonsAdded, numberOfValidPokemonsAdded, subtotal, managingFee, total } = useSchedulingPriceCalculations(pokemonsAdded);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Scheduling>();

  function completeSchedulingData(data: Scheduling) {
    const completedData = {
      ...data,
      region: selectedRegion,
      pokemons: validPokemonsAdded,
    }
    console.log(completedData);
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
              <option value={"01/02/2024"}>01/02/2024</option>
              <option value={"02/02/2024"}>02/02/2024</option>
              <option value={"03/02/2024"}>03/02/2024</option>
            </select>
          </SelectLabeled>

          <SelectLabeled>
            <label>Horário de atendimento</label>
            <select defaultValue={"Selecione um horário"} {...register('treatmentHour')}>
              <option value={"10:00-12:00"}>10:00-12:00</option>
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
          <button>Concluir agendamento</button>
        </LastSection>

      </FormContainer>
      
    </FormWrapper>
  )
}