export interface Application {
  get(appId: string) : Promise<any>
  getAll(productType?: string) : Promise<any>
  delete(appId: string) : Promise<any>
  create(body: any, productType?: string) : Promise<any>
}