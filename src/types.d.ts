export type loggertype = {
    (_code: string, _name: string, _log: string, _source: string ): void
}

export type timestampGen = {
    (): string
}
