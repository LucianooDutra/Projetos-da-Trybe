import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motorcycles = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motorcycle: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleByID = {
  id: '634852326b35b59438fbea31',
  model: 'Honda Cbr 1000rr',
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};

export {
  motorcycles,
  motorcycle,
  motorcycleByID,
};