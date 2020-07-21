export interface Trigger {
  get(triggerId: string) : Promise<any>
  getAll() : Promise<any>
  delete(triggerId: string) : Promise<any>
  create(body: any) : Promise<any>
  update(triggerId: string, body: any) : Promise<any>
  resume(triggerId: string, useResumeToken: boolean) : Promise<any>
}