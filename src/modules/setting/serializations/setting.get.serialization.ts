import { faker } from '@faker-js/faker';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, Transform } from 'class-transformer';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { ENUM_SETTING_DATA_TYPE } from 'src/modules/setting/constants/setting.enum.constant';

export class SettingGetSerialization extends ResponseIdSerialization {
  @ApiProperty({
    description: 'Name of setting',
    example: 'MaintenanceOn',
    required: true,
    nullable: false,
  })
  readonly name: string;

  @ApiProperty({
    description: 'Description of setting',
    example: 'Maintenance Mode',
    required: false,
    nullable: true,
  })
  readonly description?: string;

  @ApiProperty({
    description: 'Data type of setting',
    example: 'BOOLEAN',
    required: true,
    nullable: false,
    enum: ENUM_SETTING_DATA_TYPE,
  })
  readonly type: ENUM_SETTING_DATA_TYPE;

  @ApiProperty({
    description: 'Value of string, can be type string/boolean/number',
    oneOf: [
      { type: 'string', readOnly: true, examples: ['on', 'off'] },
      { type: 'number', readOnly: true, examples: [100, 200] },
      { type: 'boolean', readOnly: true, examples: [true, false] },
    ],
    required: true,
    nullable: false,
  })
  @Transform(({ value, obj }) => {
    const regex = /^-?\d+$/;
    const checkNum = regex.test(value);

    if (obj.type === ENUM_SETTING_DATA_TYPE.BOOLEAN && (value === 'true' || value === 'false')) return value === 'true' ? true : false;
    else if (obj.type === ENUM_SETTING_DATA_TYPE.NUMBER && checkNum) return Number(value);
    else if (obj.type === ENUM_SETTING_DATA_TYPE.ARRAY_OF_STRING) return value.split(',');

    return value;
  })
  readonly value: string | number | boolean;

  @ApiProperty({
    description: 'Date created at',
    example: faker.date.recent(),
    required: true,
    nullable: false,
  })
  readonly createdAt: Date;

  @ApiProperty({
    description: 'Date updated at',
    example: faker.date.recent(),
    required: true,
    nullable: false,
  })
  readonly updatedAt: Date;

  @ApiHideProperty()
  @Exclude()
  readonly deletedAt?: Date;
}
