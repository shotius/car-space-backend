import typeParser from 'utils/functions/typeParsers';
import { IBlog } from '../../../shared_with_front/types/types-shared';

interface Fields {
  body: unknown;
  header: unknown;
  img: unknown;
}

export const parseBlogBody = ({ body, header, img }: Fields) => {
  const parsed: Partial<IBlog> = {
    body: typeParser.parseString(body) || undefined,
    header: typeParser.parseString(header) || undefined,
    img: typeParser.parseString(img) || undefined,
  };
  return parsed;
};
