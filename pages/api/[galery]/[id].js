
import { products } from '../../../data';

export default function personHandler({ query: { id, galery } }, res) {
	const array =  products[galery];
	const find = array.find((p) => p.id == id);

	if (find) {
		res.status(200).json(find);
	} else {
		res.status(404).json({ message: `Produto com id ${id} não foi encontrado.` });
	}
}