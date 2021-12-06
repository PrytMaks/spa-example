import Error404Element from './Error404.html';
import ErrorStyles from './Error404.scss'

export class Error404 {
  constructor() {}

  async render () {
    
    return Error404Element;
  }

  async after_render () {};
}
