export type errorLog = {
    (_code: string, _name: string, _log: string ): void
}

export type requestLog = {
    (_source: string, _url: string, _method: string): void
}
