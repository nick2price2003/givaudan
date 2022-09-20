/* eslint-disable react/prop-types */
import React from 'react';

const Drinks = ({ quizResults }) => {
  return (
    <>
      {quizResults.drinkName && quizResults.drinkName !== 'Other' && (
        <>
          <div className="py-5 col-12">
            <h2>
              Have a look at our menu and order from one of our amazing
              bartenders.
            </h2>
          </div>
        </>
      )}
      <section className="col-12 text-start">
        <div className="py-5">
          {quizResults.drinkName && quizResults.drinkName === 'Vodka' && (
            <>
              <div className="drink py-4">
                <p>Moscow Mule</p>
                <p className="text-grey">
                  Sapling Vodka, Lime Juice, Ginger Beer & Angostura Bitters
                </p>
              </div>
              <div className="drink py-4">
                <p>Martini</p>
                <p className="text-grey">
                  Vodka, Dry Vermouth & Twist or Olive
                </p>
              </div>
              <div className="drink py-4">
                <p>Cosmopolitan</p>
                <p className="text-grey">
                  Sapling Vodka, Triple Sec, Lime Juice, Sugar Syrup & Cranberry
                  Juice
                </p>
              </div>
              <div className="drink py-4">
                <p>Espresso Martini</p>
                <p className="text-grey">
                  Sapling Vodka, Kahlua, Sugar Syrup & Double Extract Espresso
                  Shot
                </p>
              </div>
            </>
          )}
          {quizResults.drinkName && quizResults.drinkName === 'Rum' && (
            <>
              <div className="drink py-4">
                <p>Mojito</p>
                <p className="text-grey">
                  Pampero Rum, Lime Juice, Brown Sugar Syrup, Fresh Mint & Soda
                </p>
              </div>
              <div className="drink py-4">
                <p>Rum Punch</p>
                <p className="text-grey">
                  Rum, Orange Juice, Lime Juice, Sugar Syrup, Grenadine Syrup,
                  Angostura Bitters
                </p>
              </div>
            </>
          )}
          {quizResults.drinkName && quizResults.drinkName === 'Gin' && (
            <>
              <div className="drink py-4">
                <p>Negroni</p>
                <p className="text-grey">
                  Theodore Gin, Campari & Sweet Vermouth
                </p>
              </div>
              <div className="drink py-4">
                <p>Tom Collins</p>
                <p className="text-grey">
                  ELLC Gin, Lemon Juice, Sugar Syrup & Soda
                </p>
              </div>
              <div className="drink py-4">
                <p>Prosecco French 75</p>
                <p className="text-grey">
                  ELLC Gin, Lemon Juice, Sugar Syrup & Prosecco
                </p>
              </div>
              <div className="drink py-4">
                <p>Martini</p>
                <p className="text-grey">Gin, Dry Vermouth & Twist or Olive</p>
              </div>
            </>
          )}
          {quizResults.drinkName
            && (quizResults.drinkName === 'Whisky/Brandy'
              || quizResults.drinkName === 'Whisky') && (
              <>
                <div className="drink py-4">
                  <p>Whisky Sour</p>
                  <p className="text-grey">
                    Whisky, Lemon Juice, Sugar syrup, Angostura bitters, Egg
                    white
                  </p>
                </div>
                <div className="drink py-4">
                  <p>Old Fashioned</p>
                  <p className="text-grey">
                    Scotch whisky, Angostura bitters, sugar syrup or granulated
                    sugar, splash of water, soda water (optional)
                  </p>
                </div>
              </>
          )}
          {quizResults.drinkName
            && (quizResults.drinkName === 'Tequila/Mezcal'
              || quizResults.drinkName === 'Tequila') && (
              <>
                <div className="drink py-4">
                  <p>Margarita</p>
                  <p className="text-grey">
                    Tequila Reposado, Lime Juice, Cointreau
                  </p>
                </div>
                <div className="drink py-4">
                  <p>Firefighter</p>
                  <p className="text-grey">
                    Chilli Infused Ocho Blanco, Ancho Reyes, Agave Syrup & Lime
                    Juice
                  </p>
                </div>
              </>
          )}
          {quizResults.drinkName && quizResults.drinkName === 'Alcohol Free' && (
            <>
              <div className="drink py-4">
                <p>Virgin Mojito</p>
                <p className="text-grey">
                  Lime Juice, Brown Sugar Syrup, Fresh Mint & Soda
                </p>
              </div>
              <div className="drink py-4">
                <p>Strawberry Cooler</p>
                <p className="text-grey">
                  Strawberry Puree, Lemon Juice, & Soda
                </p>
              </div>
              <div className="drink py-4">
                <p>No Sunset</p>
                <p className="text-grey">
                  Orange Juice, Grenadine & Lime Juice
                </p>
              </div>
              <div className="drink py-4">
                <p>Softs</p>
                <p className="text-grey">Variety of soft drinks</p>
              </div>
            </>
          )}
          {quizResults.drinkName && quizResults.drinkName === 'Schnapps' && (
            <>
              <div className="drink py-4">
                <p>Sex on the Beach</p>
                <p className="text-grey">
                  vodka, peach schnapps, Orange Juice, Orange Slices, cranberry
                  juice
                </p>
              </div>
              <div className="drink py-4">
                <p>Woo Woo</p>
                <p className="text-grey">
                  vodka, peach schnapps, cranberry juice, lime juice
                </p>
              </div>
            </>
          )}
          {quizResults.drinkName && quizResults.drinkName === 'Other' && (
            <>
              <div className="col-12">
                <h2>
                  Talk to one of our amazing bartenders and choose your favorite
                  drink from our bar menu.
                </h2>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Drinks;
