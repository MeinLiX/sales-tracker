const commandService = {
    GetFileName(filename: string, fileExtensions: string = ".ts"): string {
        return require('path').basename(filename).split(fileExtensions)[0];
    }
}

export default commandService;