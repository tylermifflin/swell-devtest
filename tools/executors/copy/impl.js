/**
 * @typedef {{ to: string; from: string; }} CopyPattern
 * @typedef {{ patterns: CopyPattern[] }} CopyExecutorOptions
 * @typedef {import('@nrwl/devkit').ExecutorContext} ExecutorContext
 */

const { cp } = require('shelljs');

/**
 *
 * @param {CopyExecutorOptions} options
 * @param {ExecutorContext} context
 * @returns {{ success: boolean }}
 */
async function copyExecutor(options, context) {
	const workspaceRoot = context.root;
	const cwd = workspaceRoot;

	for (const pattern of options.patterns) {
		const { from, to } = pattern;
		const { code } = cp('-rf', from, to);
		const success = code === 0;
		if (!success) {
			return { success };
		}
	}

	return { success: true };
}

module.exports = copyExecutor;
