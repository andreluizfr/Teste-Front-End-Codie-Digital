import { addMethod, string, array, object, InferType } from 'yup';

import regions from '../data/regions.json';

const regionsMap = regions as {[key:string]: string[]};

addMethod(string, 'validRegion', function(message) {
  return this.test('validRegion', message, function(value) {

    if(value !== undefined && Object.keys(regionsMap).includes(value))
      return true;
    
    return this.createError({
      path: this.path,
      message: message || 'O valor não é válido.'
    });
  });
});

let schedulingSchema = object({
  name: string().required("O campo nome é requerido."),
  lastName: string().required("O campo sobrenome é requerido."),
  region: string().required("O campo região é requerido.").validRegion("Região inválida"),
  city: string().required("O campo cidade é requerido."),
  pokemons: array().required("Adicione pelo menos um pokémon").min(1, "Adicione pelo menos um pokémon").max(6, "O limite de pokémons é 6"),
  treatmentDate: string().required("O campo da data para atendimento é requerido."),
  treatmentHour: string().required("O campo do horário do atendimento é requerido."),
});

export { schedulingSchema };

export type Scheduling = InferType<typeof schedulingSchema>;