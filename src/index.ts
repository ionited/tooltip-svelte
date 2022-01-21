import { Tooltip } from '@ionited/tooltip';

export function tooltip(node: HTMLElement, parameters?: any) {
  const tooltip = Tooltip(node, parameters);

  return {
    destroy() {
      tooltip.destroy();
    }
  }
}
