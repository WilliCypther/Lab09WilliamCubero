import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../entity/Estudiante"; // Asegúrate de tener la ruta correcta hacia estudiante.entity.ts
import { Matricula } from "../entity/Matricula";

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  // Relación ManyToMany con Estudiante
  @ManyToMany(() => Estudiante, estudiante => estudiante.cursos)
  @JoinTable()
  estudiantes: Estudiante[];

  // Relación OneToMany con Matricula
  @OneToMany(() => Matricula, matricula => matricula.curso)
  matriculas: Matricula[];
}
