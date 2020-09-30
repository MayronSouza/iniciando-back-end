import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppoinmentDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentRepository {
  create(date: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
