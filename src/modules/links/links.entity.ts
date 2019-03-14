import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Users } from '../users/users.entity';

@Entity('Links', { schema: 'public' })
@Index('Links_full_key', ['full'], { unique: true })
@Index('Links_short_key', ['short'], { unique: true })
export class Links extends BaseEntity {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: string;

  @ManyToOne(type => Users, Users => Users.linkss, { nullable: false })
  @JoinColumn({ name: 'owner' })
  owner: Users | null;

  @Column('character varying', {
    nullable: false,
    length: 2083,
    name: 'full',
  })
  full: string;

  @Column('character varying', {
    nullable: true,
    length: 6,
    name: 'short',
  })
  short: string | null;

  @Column('date', {
    nullable: false,
    name: 'createAt',
  })
  createAt: string;

  @Column('date', {
    nullable: false,
    name: 'updateAt',
  })
  updateAt: string;
}
