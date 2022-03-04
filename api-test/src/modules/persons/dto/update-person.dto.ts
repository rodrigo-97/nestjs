import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePersonDto } from "./create-person.dto";

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
    @ApiProperty()
    email?: string;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    password?: string;
}
