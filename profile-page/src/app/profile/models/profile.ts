import {Contact} from './contact';
import {Post} from './post';
import {Connection} from './connection';

export interface Profile {
  name?: string;
  image?: string;
  birth?: Date;
  contact?: Contact;
  education?: string[];
  work?: string[];
  latest_posts?: Post[],
  top_connections?: Connection[]
}
