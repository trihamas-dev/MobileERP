import { _wsJsonConnectionHTTP } from '../../fungsi/function';

_wsJsonConnectionHTTP("tenor_list","",(a) => {
  console.log(a);
});
export default DataAPI = {
  tenor: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
  },
  wilayah: {
    1: 'Wil 1',
    2: 'Wil 2',
    3: 'Wil 3',
    4: 'Wil 4',
    5: 'Wil 5',
    6: 'Wil 6',
  },
  type: {
    ad: 'Advance',
    ar: 'Arrear',
  },
  usage: {
    pribadi: 'Pribadi/Dinas',
    komersil: 'Komersil',
    sewa: 'Sewa',
  },
  condition: {
    new: 'New',
    used: 'Used',
    contoh: 'contoh',
  },
  kind: {
    BOX: 'BOX',
    BUS: 'BUS',
    JEEP: 'JEEP',
    MICROBUS: 'MICROBUS',
    MINIBUS: 'MINIBUS',
    'PICK UP': 'PICK UP',
    SEDAN: 'SEDAN',
    TRUCK: 'TRUCK',
  },
  category: {
    PENUMPANG: 'PENUMPANG',
    KEPU: 'KEPU',
    NIAGA: 'NIAGA',
    'LAIN-LAIN': 'LAIN-LAIN',
    NIAGA1: 'NIAGA1',
  },
  merk: {},
  model: {},
  unitType: {},
  insuranceType: {},
};
