import { col, css, row } from "../utils"

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }
  //если он не будети реализован в наследниках, будет вылетать ошибка
  toHTML() {
    throw new Error('метод toHTML должен быть определен')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { value, options: { tag = 'h1', styles } } = this;
    return row(col(`<${tag}>${value}</${tag}>`), css(styles))

  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { value, options: { styles: s, imageStyles: is, alt = ' ' } } = this;
    return row(`<img style=${css(is)} alt='${alt}' src="${value}"/>`, css(s))

  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { value, options: { styles } } = this;
    const html = value.map(col).join('');
    return row(html, css(styles))
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { value, options: { tag = 'h1', styles } } = this;

console.log(css(styles))
    return row(col(`<p>${value}</p>`), css(styles))
  }
}