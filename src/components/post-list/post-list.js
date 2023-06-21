import React from "react";
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

// Компонент, що відображає список постів
const PostList = ({ posts, onDelete,onToggleLiked, onToggleImportant }) => {

    // Створення елементів списку на основі даних постів
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        );
    });

    return (
        <ListGroup className="app-list">
            {elements} {/* Рендер елементів списку постів */}
        </ListGroup>
    );
}

export default PostList;


