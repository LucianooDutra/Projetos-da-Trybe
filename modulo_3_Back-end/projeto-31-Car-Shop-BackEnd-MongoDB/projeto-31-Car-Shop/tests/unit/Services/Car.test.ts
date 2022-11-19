import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/Car';
import Car from '../../../src/Domains/Car';

import {
  cars,
  car,
  carByID,
} from './Car.mocks';

describe('Testando a rota /Cars', function () {
  it('Deve retornar a lista de cars com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(cars);

    // Act
    const service = new CarService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(cars);

    sinon.restore();
  });

  it('cadastrando um carro com sucesso', async function () {
    // Arrange
    sinon.stub(Model, 'create').resolves(car);

    const createdCar = new Car(car);

    // Act
    const service = new CarService();
    const result = await service.create(car);

    // Assert
    expect(result).to.be.deep.equal(createdCar);

    sinon.restore();
  });

  it('Deve retornar um carro pelo ID com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(carByID);

    // Act
    const service = new CarService();
    const result = await service.getById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(carByID);

    sinon.restore();
  });

  it('Deve retornar um error quando não encontrado o carro pelo ID', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves({});

    try {
    // Act
      const service = new CarService();
      await service.getById('634852326b35b59438fbea2');
    } catch (err) {
    // Assert
      expect((err as Error).message).to.be.equal('Car not found');
    }
    sinon.restore();
  });

  it('Fazer update pelo id, deve retornar o carro modificado com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carByID);

    // Act
    const service = new CarService();
    const result = await service.updateById('634852326b35b59438fbea2f', car);

    // Assert
    expect(result).to.be.deep.equal(carByID);

    sinon.restore();
  });

  it('Fazer update pelo id incorreto, deve retornar o error', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});

    try {
    // Act
      const service = new CarService();
      await service.updateById('634852326b35b59438fbea2', car);
    } catch (err) {
    // Assert
      expect((err as Error).message).to.be.equal('Car not found');
    }
    sinon.restore();
  });

  it('Ao fazer o delete de um carro pelo id, não deve ser retornado nada', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndDelete').resolves({});

    // Act
    const service = new CarService();
    const result = await service.deleteById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(undefined);

    sinon.restore();
  });
});