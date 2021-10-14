import React, {useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';

function Comments() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/comments');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">comments</h1>
                <form method="POST" action="/addComment">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="commentInput" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded" role="alert">
                             <i>{item.user.fullname} ({item.user.username}): {item.comment}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Comments;