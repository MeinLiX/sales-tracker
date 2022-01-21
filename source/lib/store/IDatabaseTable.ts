export interface IDatabaseTable {
    tryCreateTable(): Promise<void>;
}