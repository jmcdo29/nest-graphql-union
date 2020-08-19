import { Query, Resolver } from '@nestjs/graphql';
import { Baz } from './baz.model';

@Resolver(() => Baz)
export class AppResolver {
  @Query(() => [Baz])
  sayHello(): Array<typeof Baz> {
    return [{ name: 'Hello'}, { value: 5 }];
  }
}
