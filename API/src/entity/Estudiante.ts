// estudiante.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Curso } from '../entity/Curso'; // Importar la entidad de Curso
import { Matricula } from '../entity/Matricula';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @ManyToMany(type => Curso, curso => curso.estudiantes)
  @JoinTable()
  cursos: Curso[];


  // Relación con Matricula
   @OneToMany(() => Matricula, matricula => matricula.estudiante)
   matriculas: Matricula[];

   
}
