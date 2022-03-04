import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    password: string;
}
