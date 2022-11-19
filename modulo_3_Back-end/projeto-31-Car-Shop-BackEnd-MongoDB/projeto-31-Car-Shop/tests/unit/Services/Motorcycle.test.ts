import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/Motorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

import {
  motorcycles,
  motorcycle,
  motorcycleByID,
} from './Motorcycle.mocks';

describe('Testando a rota /Cars', function () {
  it('Deve retornar a lista de motos com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(motorcycles);

    // Act
    const service = new MotorcycleService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(motorcycles);

    sinon.restore();
  });

  it('cadastrando uma moto com sucesso', async function () {
    // Arrange
    const createdMotorcycle = new Motorcycle(motorcycle);

    sinon.stub(Model, 'create').resolves(createdMotorcycle);

    // Act
    const service = new MotorcycleService();
    const result = await service.create(motorcycle);

    // Assert
    expect(result).to.be.deep.equal(createdMotorcycle);

    sinon.restore();
  });

  it('Deve retornar uma moto pelo ID com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(motorcycleByID);

    // Act
    const service = new MotorcycleService();
    const result = await service.getById('634852326b35b59438fbea31');

    // Assert
    expect(result).to.be.deep.equal(motorcycleByID);

    sinon.restore();
  });

  it('Deve retornar um error quando não encontrado uma moto pelo ID', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves({});

    try {
    // Act
      const service = new MotorcycleService();
      await service.getById('634852326b35b59438fbea3');
    } catch (err) {
    // Assert
      expect((err as Error).message).to.be.equal('Car not found');
    }
    sinon.restore();
  });

  it('fazer update pelo id, deve retornar a moto modificada com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleByID);

    // Act
    const service = new MotorcycleService();
    const result = await service.updateById('634852326b35b59438fbea31', motorcycle);

    // Assert
    expect(result).to.be.deep.equal(motorcycleByID);

    sinon.restore();
  });

  it('Fazer update pelo id incorreto, deve retornar o error', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});

    try {
    // Act
      const service = new MotorcycleService();
      await service.updateById('634852326b35b59438fbea3', motorcycle);
    } catch (err) {
    // Assert
      expect((err as Error).message).to.be.equal('Car not found');
    }
    sinon.restore();
  });

  it('Ao fazer o delete de uma moto pelo id, não deve ser retornado nada', async function () {
    // Arrange
    sinon.stub(Model, 'findByIdAndDelete').resolves({});

    // Act
    const service = new MotorcycleService();
    const result = await service.deleteById('634852326b35b59438fbea31');

    // Assert
    expect(result).to.be.deep.equal(undefined);

    sinon.restore();
  });
});