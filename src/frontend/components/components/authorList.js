import React, { useEffect, useState } from 'react';
import { Collections, DummyAuthors } from '../../data/Collections';

function Authorlist() {
    const [ topAuthors, setTopAuthors ] = useState([]);
    

    useEffect(() => {
        let authors = DummyAuthors
            .sort((prevAuthor, nextAuthor)=> prevAuthor.followers - nextAuthor.followers)
            .filter((item, index) => index <= 7);
        const topAuthorIds = authors.map(item => item.id);
        const mapAuthor = new Map();
        for (let i = 0; i < Collections.length; i += 1) {
            if (topAuthorIds.includes(Collections[i].authorId)) {
                if (mapAuthor.get(Collections[i].authorId)) {
                    mapAuthor.set(Collections[i].authorId, mapAuthor.get(Collections[i].authorId) + 1);
                } else {
                    mapAuthor.set(Collections[i].authorId, 1);
                }
            }
        };
        authors = authors.map(item => ({ ...item, count: mapAuthor.get(item.id) }));
        setTopAuthors(authors);
    }, []);

    return (
        <div>
            <ol className="author_list">
                {
                    topAuthors.map(author => (
                        <li>                                        
                            <div className="author_list_pp">
                                <span onClick={()=> window.open("", "_self")}>
                                    <img className="lazy" src={author.avatar} alt=""/>
                                    <i className="fa fa-check"></i>
                                </span>
                            </div>
                            <div className="author_list_info">
                                <span onClick={()=> window.open("", "_self")}>{author.name}</span>
                                <span className="bot">{author?.count} item</span>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
};
export default Authorlist;