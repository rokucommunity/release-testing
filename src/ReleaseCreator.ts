export class ReleaseCreator {
    constructor(
        private options: {
            branch: string;
            releaseVersion: string;
        }
    ) {

    }

    async run() {
        console.log('Creating release PR');
        console.log(`Branch: ${this.options.branch}`);
        console.log(`Version: ${this.options.releaseVersion}`);
        // execSync(`git checkout -b release/${this.options.version} ${this.options.branch}`);
        // execSync(`git push origin release/${this.options.version}`);
        // execSync(`hub pull-request -b ${this.options.branch} -h release/${this.options.version} -m "Release ${this.options.version}"`);
    }
}
