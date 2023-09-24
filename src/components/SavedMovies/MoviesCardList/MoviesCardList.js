import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
	const isMedia1200 = useMediaQuery(1200);
	const isMedia660 = useMediaQuery(660);

	const initialCardCount = isMedia660 ? 5 : isMedia1200 ? 8 : 12;
	const maxCardCount = 3;

	const cardsToDuplicate = {
		duration: 77,
		image:
			'https://avatars.dzeninfra.ru/get-zen_doc/51081/pub_5e9984e8adf4e00dc2d7daa8_5e998afaf920f87d43b400cb/scale_1200',
		trailerLink: '/',
		nameRu: '33 слова о дизайне',
	};

	const [cards, setCards] = useState(
		Array(maxCardCount).fill(cardsToDuplicate)
	);

	if (setCards) {
		console.log('');
	}
	const [visible, setVisible] = useState();

	useEffect(() => {
		setVisible(initialCardCount);
	}, [initialCardCount]);

	function loadMoreCards() {
		setVisible(prevValue => prevValue + initialCardCount);
	};

	const [isSaved, setIsSaved] = useState(false);

	function removeCardSave() {
		setIsSaved(!isSaved);
	};

	return (
		<section className='movies-card-list'>
			<div className='container-movie'>
				<div className='movies-card-list__wrapper'>
					{cards.slice(0, visible).map((card, index) => (
						<MoviesCard
							key={index}
							card={card}
							removeCardSave={removeCardSave}
						/>
					))}
				</div>
				{visible <= maxCardCount && (
					<button
						onClick={loadMoreCards}
						className='movies-card-list__loadmore-button'
					>
						Ещё
					</button>
				)}
			</div>
		</section>
	);
}

export default MoviesCardList;
