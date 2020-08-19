import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Bar {
  @Field(() => Int)
  value: number;
}