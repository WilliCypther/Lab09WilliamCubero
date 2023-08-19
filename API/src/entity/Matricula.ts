import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Estudiante } from "../entity/Estudiante"; // Asegúrate de tener la ruta correcta hacia estudiante.entity.ts
import { Curso } from "../entity/Curso"; // Asegúrate de tener la ruta correcta hacia curso.entity.ts

@Entity()
export class Matricula {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Estudiante, estudiante => estudiante.matriculas)
  @JoinColumn({ name: 'estudiante_id' }) // Nombre de la columna en la tabla de matrícula que almacena la relación
  estudiante: Estudiante;

  @ManyToOne(() => Curso, curso => curso.matriculas)
  @JoinColumn({ name: 'curso_id' }) // Nombre de la columna en la tabla de matrícula que almacena la relación
  curso: Curso;
}
