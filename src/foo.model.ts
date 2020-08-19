import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Foo {
  @Field()
  name: string;
}