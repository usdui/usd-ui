import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Button from '.'

test('button should contain slots', () => {
    const wrapper = mount(Button, {
        slots: {
            default: '你好ya'
        }
    })
    expect(wrapper.html()).toMatchInlineSnapshot('"<div class=\\"text-red-500\\">你好ya</div>"')
});