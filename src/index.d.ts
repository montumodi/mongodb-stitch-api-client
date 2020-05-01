import {Trigger} from './trigger'
import {Application} from './application'
import {Service} from './service'

export * from './trigger'
export * from './application'

// Stitch Client
export interface StitchApiClient {
    application: Application;
    // email: Email;
    // log: Log;
    // rule: Rule;
    // security: Security;
    service: Service;
    // stitchFunction: StitchFunction;
    // token: Token;
    trigger: Trigger;
    // webhook: Webhook
}

export interface StitchApiClientOptions {
    /**
     * API Access Public Key
     */
    publicKey: string;
    /**
     * API Access Private Key
     */
    privateKey: string;
    /**
     * Base URL for Stitch API
     */
    baseUrl: string;
    /**
     * Target Project ID in Atlas account
     */
    projectId: String;
    /**
     * Target App Id
     */
    appId: string
}

export = getMongodbStitchApiClient;

declare function getMongodbStitchApiClient(options: StitchApiClientOptions): StitchApiClient;