import { ArticleWrapper, NewsSectionHeader, Wrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import React from 'react';
import { Button } from 'components/atoms/Button/Button';

const data = [
    {
        title: 'New computer at school0',
        category: 'Tech news',
        content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla
        neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci,
        condimentum tellus leo nunc, vitae eu..`,
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    },
    {
        title: 'New computer at school1',
        category: 'Tech news',
        content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla
        neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci,
        condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit
        quis egestas eget at magna ac commodo volutpat.`,
    },
    {
        title: 'New computer at school2',
        category: 'Tech news',
        content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla
        neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci,
        condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit
        quis egestas eget at magna ac commodo volutpat.`,
        image: null,
    },
    {
        title: 'New computer at school3',
        category: 'Tech news',
        content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla
        neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci,
        condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit
        quis egestas eget at magna ac commodo volutpat.`,
    },
];

const NewsSection = () => {
    return (
        <>
            <Wrapper>
                <NewsSectionHeader> University news feed</NewsSectionHeader>
                {data.map(({ title, category, content, image = null }) => (
                    <ArticleWrapper>
                        <TitleWrapper>
                            <h3>{title}</h3>
                            <p>{category}</p>
                        </TitleWrapper>
                        <ContentWrapper>
                            <p>{content}</p>
                            {image ? <img src={image} alt="article image" /> : null}
                        </ContentWrapper>
                        <Button isBig>Read More</Button>{' '}
                        {/* isBig is a flag, that is checked inside styles of Button */}
                    </ArticleWrapper>
                ))}
            </Wrapper>
        </>
    );
};

NewsSection.propTypes = {};
export default NewsSection;
