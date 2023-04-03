import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { getHeroById } from '../helpers';

export const HeroPage = () => {
    const { id } = useParams();
    const hero = useMemo(() => getHeroById(id), [id]);
    const location = useLocation();
    const navigate = useNavigate();

    const heroImageUrl = require(`../../../assets/heroes/${id}.jpg`);
    const publisher = hero.publisher === 'DC Comics' ? 'DC' : 'Marvel';
    const previousRoute = location.state?.from?.pathname || `/${publisher}`;

    const handleNavigateBack = () => {
        const publisherLowercase = publisher.toLowerCase();

        if (publisherLowercase)
            navigate(`/${publisherLowercase}`, {
                replace: true,
            });

        navigate(-1, {
            replace: true,
        });
    };

    if (!hero) {
        return <Navigate to="marvel" />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={heroImageUrl} alt={hero.superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> {hero.first_appearance}
                    </li>
                </ul>

                {hero.characters === hero.alter_ego ? null : (
                    <>
                        <h5 className="mt-3">Characters</h5>
                        <p>{hero.characters}</p>
                    </>
                )}

                <button className="btn btn-primary mt-3" onClick={handleNavigateBack}>
                    Go back
                </button>
            </div>
        </div>
    );
};
