import { INewReview } from '../../../shared_with_front/types/types-shared';
import typeParser from './typeParsers';
const { parseString } = typeParser;

interface Fields {
  text: unknown;
  userId: unknown;
}
/**
 * Function receives object and parsers new customer review from it
 * @param {Field} params
 * @returns {INewReview}
 */
export const parseNewCustomerReview = ({
  text,
  userId,
}: Fields): INewReview => {
  const newReview: INewReview = {
    text: parseString(text),
    userId: parseString(userId),
    images: [],
  };

  return newReview;
};
