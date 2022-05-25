import { ArticleWrapper, NewsSectionHeader, Wrapper, TitleWrapper } from './NewsSection.styles';
import React from 'react';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
    return (
        <>
            <Wrapper>
                <NewsSectionHeader> University news feed</NewsSectionHeader>
                <ArticleWrapper>
                    <TitleWrapper>
                        <h3>Lorem ipsum</h3>
                        <p>Tech news</p>
                    </TitleWrapper>
                    <p>
                        Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla
                        neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci,
                        condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit
                        quis egestas eget at magna ac commodo volutpat.
                    </p>
                    <Button isBig>Read More</Button> {/* isBig is a flag, that is checked inside styles of Button */}
                </ArticleWrapper>
                {/* <ArticleWrapper>
                    <TitleWrapper>
                        <h3>Lorem ipsum</h3>
                        <p>Tech news</p>
                    </TitleWrapper>
                    <p>dolor sit amet</p>
                    <Button>Click me</Button>
                </ArticleWrapper>
                <ArticleWrapper>
                    <TitleWrapper>
                        <h3>Lorem ipsum</h3>
                        <p>Tech news</p>
                    </TitleWrapper>
                    <p>dolor sit amet</p>
                    <Button>Click me</Button>
                </ArticleWrapper> */}
            </Wrapper>
        </>
    );
};

NewsSection.propTypes = {};
export default NewsSection;
