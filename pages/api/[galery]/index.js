import { products } from '../../../data';

export default function personHandler({ query: { galery } }, res) {
	const array =  products[galery];

	if (array) {
		res.status(200).json(array);
	} else {
		res.status(404).json({ message: `A galeria ${galery} não foi encontrado.` });
	}
}