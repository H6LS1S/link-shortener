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
import { Links } from '../links/links.entity';

@Entity('Users', { schema: 'public' })
@Index('Users_email_key', ['email'], { unique: true })
@Index('Users_name_key', ['name'], { unique: true })
export class Users extends BaseEntity {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: string;

  @Column('character varying', {
    nullable: false,
    length: 26,
    name: 'name',
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 230,
    name: 'email',
  })
  email: string;

  @Column('character varying', {
    nullable: false,
    name: 'password',
  })
  password: string;

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

  @OneToMany(type => Links, Links => Links.owner)
  linkss: Links[];
}
