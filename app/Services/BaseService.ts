export abstract class BaseService {
  protected model: any

  constructor() {
    this.resolveModel()
  }

  private resolveModel() {
    this.model = new this.model()
  }
}
