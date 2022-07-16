import React, { useEffect, useState } from 'react';
import { Collections, DummyAuthors, topAuthorIds } from '../../data/Collections';

function Authorlist() {
    const [ topAuthors, setTopAuthors ] = useState([]);
    

    useEffect(() => {
        const topAuthors = DummyAuthors.filter((author) => topAuthorIds.includes(author.id));
        setTopAuthors(topAuthors);
    }, []);

    return (
        <div>
            <ol className="author_list">
                {
                    topAuthors.map(author => (
                        <li>                                        
                            <div className="author_list_pp">
                                <span onClick={()=> window.open(`/Author/${author?.id}`, "_self")}>
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