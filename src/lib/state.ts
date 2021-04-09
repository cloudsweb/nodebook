export default class State {
  // TODO endpoint?
  _index: any = null

  async index() {
    const resp = await fetch('/@data/index.json')
    this._index = await resp.json()
    return this._index
  }

  async page(id: string) {
    const resp = await fetch(`/@data/${id}.md`)
    return await resp.text()
  }
}
