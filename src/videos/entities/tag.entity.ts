import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tag',
})
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
