import Yup from 'yup';

import regions from '../data/regions.json';

const regionsMap = regions as {[key:string]: string[]};

Yup.addMethod(Yup.string, 'validRegion', function(message) {
  return this.test('validRegion', message, function(value) {

    if(value !== undefined && Object.keys(regionsMap).includes(value))
      return true;
    
    return this.createError({
      path: this.path,
      message: message || 'O valor não é válido.'
    });
  });
});

Yup.StringSchema.prototype.validRegion

let schedulingSchema = Yup.object({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  region: Yup.string().required().validRegion(),
  city: Yup.string().required(),
  pokemons: Yup.array().required().min(1).max(6),
  treatmentDate: Yup.string().required(),
  treatmentHour: Yup.string().required(),
});

export type Scheduling = Yup.InferType<typeof schedulingSchema>;