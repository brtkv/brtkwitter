import React, {Component} from 'react';
import './post-list-item.css';

// Компонент, що відображає окремий пост у списку
export default class PostListItem extends Component {
    

    render() {
        const {label,onDelete, onToggleImportant, onToggleLiked,important,like} = this.props; // Отримуємо текст поста з властивостей
       
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important'; // Додаємо клас "important", якщо пост важливий
        }
        if (like) {
            classNames += ' like'; // Додаємо клас "like", якщо пост сподобався
        }

        return (
          <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLiked}>
              {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn-star btn-sm"
                onClick={onToggleImportant}
              >
                <i className="fa fa-star"></i>
              </button>
              <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                <i className="fa fa-trash-o"></i>
              </button>
              <i className="fa fa-heart"></i>
            </div>
          </div>
        );
      }
    }
