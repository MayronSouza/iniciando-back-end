import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import CreateAppointmetService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmetService;

describe('CreateAppointmet', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmetService(fakeAppointmentsRepository);
  });

  it('should be able to create a appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  it('should not be able to create two apoointments on the same time', async () => {
    const appointmentDate = new Date(2010, 11, 2, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123124',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
