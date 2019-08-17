import React from 'react';
import Card from './Card';

const CardList = ({ streamers }) => {
    return (
        <div>{
            streamers.map((user, i) =>{
                return (
                    <Card 
                        key       ={i}
                        id        ={streamers[i].id} 
                        name      ={streamers[i].name} 
                        twitter   ={streamers[i].twitter} 
                        instagram ={streamers[i].instagram} 
                        twitch    ={streamers[i].twitch}
                        img       ={streamers[i].img}
                        />
                    );
            })
        }
        </div>
    );
}

export default CardList;