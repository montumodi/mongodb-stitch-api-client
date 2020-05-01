export interface Service {
  get(serviceId: string) : Promise<any>
  getAll() : Promise<any>
  delete(serviceId: string) : Promise<any>
  create(body: any) : Promise<any>
  update(serviceId: string, body: any) : Promise<any>
}