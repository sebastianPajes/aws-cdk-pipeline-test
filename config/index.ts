import { Options } from '../types';

export const options: Options = {
    repoString: 'sebastianPajes/aws-cdk-pipeline-test', // GitHub owner/repository
    connectionArn: 'arn:aws:codestar-connections:us-east-1:275179852100:connection/bce69f03-7c8d-4d70-8f74-04b9218cd0cc', // CodeStar GitHub connection ARN
    version: '1', // Increment to trigger a pipeline deployment
    defaultRegion: 'us-east-1',
    toolsAccount: '275179852100', // Account where Pipelines are deployed
    appPipelines: [
        {
            name: 'sandbox', // Dev environment
            account: '482047510037',
            branch: 'sandbox',
            preApproval: false, // Require approval before Create Change Set
        },
        {
            name: 'staging', // UAT/QA environment
            account: '651997905879',
            branch: 'staging',
            preApproval: false,
        },
        {
            name: 'prod', // Production environment
            account: '145474670446',
            branch: 'main',
            preApproval: true,
        }
    ],
};
